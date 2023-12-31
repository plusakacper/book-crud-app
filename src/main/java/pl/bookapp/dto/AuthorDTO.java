package pl.bookapp.dto;

import java.time.LocalDate;
import java.util.Objects;

public class AuthorDTO {

	private Long id;
	private String firstName;
	private String surname;
	private LocalDate birthdate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
		return Objects.hash(birthdate, firstName, id, surname);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AuthorDTO other = (AuthorDTO) obj;
		return Objects.equals(birthdate, other.birthdate) && Objects.equals(firstName, other.firstName)
				&& Objects.equals(id, other.id) && Objects.equals(surname, other.surname);
	}

	@Override
	public String toString() {
		return "AuthorDTO [id=" + id + ", firstName=" + firstName + ", surname=" + surname + ", birthdate=" + birthdate
				+ "]";
	}

}
