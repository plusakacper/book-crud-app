package pl.bookapp.dto;

import java.time.LocalDate;
import java.util.Objects;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class AuthorAddDTO {

	@NotBlank
	@Size(max = 255)
	private String firstName;
	@NotBlank
	@Size(max = 255)
	private String surname;
	@NotNull
	private LocalDate birthdate;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	@Override
	public int hashCode() {
		return Objects.hash(birthdate, firstName, surname);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AuthorAddDTO other = (AuthorAddDTO) obj;
		return Objects.equals(birthdate, other.birthdate) && Objects.equals(firstName, other.firstName)
				&& Objects.equals(surname, other.surname);
	}

	@Override
	public String toString() {
		return "AuthorAddDTO [firstName=" + firstName + ", surname=" + surname + ", birthdate=" + birthdate + "]";
	}

}
