package com.myapp.rest.webservices.restfulwebservices;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//dis function to encrypt the new passwords (still tryna find a way to connect it to db and our signup page)
public class BcryptEncoderTest{
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedString = encoder.encode("password");
        System.out.println(encodedString);
    }
}

