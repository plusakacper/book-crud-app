package pl.bookapp.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class AuthorDTO {

	@NotNull
	private Long id;
	@NotBlank
	@Size(max = 255)
	private String firstName;
	@Size(max = 255)
	private String surname;
	@NotNull
	private LocalDate birthdate;

}
