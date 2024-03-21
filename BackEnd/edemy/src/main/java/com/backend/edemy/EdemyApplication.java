package com.backend.edemy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EdemyApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdemyApplication.class, args);
	}

	@GetMapping("/")
	public String name(){
		return "Hello World !";
	}

}
