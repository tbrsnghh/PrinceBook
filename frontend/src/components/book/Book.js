import React from "react";

export default function Book({book}) {
  return (
    <>
      <div class="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          class="w-full h-48 object-cover"
          src="link-to-book-cover.jpg"
          alt="Book Cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">Tiêu Đề Sách</h3>
          <p class="text-sm text-gray-700 mb-2">
            Tác giả: <span class="font-semibold">Tên Tác Giả</span>
          </p>
          <p class="text-gray-600 mb-4">
            Một đoạn mô tả ngắn về sách. Nội dung mô tả này sẽ cung cấp cho độc
            giả những thông tin cơ bản về cuốn sách.
          </p>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Mua Ngay
          </button>
        </div>
      </div>
    </>
  );
}
