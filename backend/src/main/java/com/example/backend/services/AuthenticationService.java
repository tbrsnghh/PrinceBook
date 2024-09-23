package com.example.backend.services;


import java.text.ParseException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dtos.AuthencationDTO;

import com.example.backend.dtos.IntrospectDto;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
import com.example.backend.responses.AuthenticationResponses;
import com.example.backend.responses.IntrospectReponses;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.Payload;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import java.time.temporal.ChronoUnit;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;

import java.time.Instant;


@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class AuthenticationService {
    @Autowired
   UserRepository userReponsitories;
   @NonFinal
  @Value("${jwt.signkey}")
  protected String SECRET_KEY;


    public IntrospectReponses introspect(IntrospectDto introspectDto) throws  ParseException, JOSEException {
        var token = introspectDto.getToken();
    
    JWSVerifier jwsVerifier = new MACVerifier(SECRET_KEY.getBytes());
    SignedJWT signedJWT = SignedJWT.parse(token);

    java.util.Date expityTime = signedJWT.getJWTClaimsSet().getExpirationTime();
    var verifyed = signedJWT.verify(jwsVerifier);

    return IntrospectReponses.builder().valid(verifyed && expityTime.after(new Date())).build();
    }


      public AuthenticationResponses authenticate(AuthencationDTO authencationDTO) {

         User user = userReponsitories.findByUsername(authencationDTO.getUsername());
        if(user == null)
            throw new ResourceNotFoundException("tai khoan khong ton tai");
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
    boolean authenticated = passwordEncoder.matches(authencationDTO.getPassword(), user.getPassword());

    if (!authenticated)
      throw new ResourceNotFoundException("sai mat khau");
    var token = generateToken(authencationDTO.getUsername());
    return AuthenticationResponses.builder().token(token)
      .role(user.getRole()).username(user.getUsername())
      .phone(user.getPhone())
      .gmail(user.getGmail())
      .address(user.getAddress())
      .ngay_sinh(user.getNgay_sinh())
      
      .authenticate(true).build();
  }


  private String generateToken(String username) {
    JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
    JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
        .subject(username)
        .issuer("localhost")
        .issueTime(new Date())
        .expirationTime(new Date(Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()))
        .build();
    Payload payload = new Payload(jwtClaimsSet.toJSONObject());
    JWSObject jwsObject = new JWSObject(header, payload);
    try {
      jwsObject.sign(new MACSigner(SECRET_KEY.getBytes()));
      return jwsObject.serialize();
    } catch (Exception e) {
      throw new RuntimeException(e);
    }

  }
}
