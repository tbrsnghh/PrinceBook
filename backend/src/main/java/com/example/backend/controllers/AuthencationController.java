package com.example.backend.controllers;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dtos.AuthencationDTO;
import com.example.backend.dtos.IntrospectDto;
import com.example.backend.responses.ApiResponse;
import com.example.backend.responses.AuthenticationResponses;
import com.example.backend.responses.IntrospectReponses;
import com.example.backend.services.AuthenticationService;
import com.nimbusds.jose.JOSEException;




@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthencationController {
    @Autowired
    private AuthenticationService authenticationService;




    @PostMapping("")
    public ApiResponse<AuthenticationResponses> authencated(@RequestBody AuthencationDTO authencationDTO) {

        var result = authenticationService.authenticate(authencationDTO);
         return ApiResponse.<AuthenticationResponses>builder()
               .data(result)
               .status(HttpStatus.OK.value())
               .message("Login successfully")
               .build();
        
    }

    @PostMapping("/introspect")
    public ApiResponse<IntrospectReponses> authenticate(@RequestBody IntrospectDto introspectDto) throws ParseException, JOSEException {
        var result = authenticationService.introspect(introspectDto);
        return ApiResponse.<IntrospectReponses>builder()
               .data(result)
               
               .build();
    }
}
