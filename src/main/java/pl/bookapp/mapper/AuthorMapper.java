package pl.bookapp.mapper;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Component;

import pl.bookapp.domain.Author;
import pl.bookapp.dto.AuthorDTO;

@Component
public class AuthorMapper {

	public AuthorDTO authorToAuthorDTO(Author author) {
		if (Objects.isNull(author)) {
			return null;
		} else {
			AuthorDTO authorDTO = new AuthorDTO();
			authorDTO.setId(author.getId());
			authorDTO.setFirstName(author.getFirstName());
			authorDTO.setSurname(author.getSurname());
			authorDTO.setBirthdate(author.getBirthdate());
			return authorDTO;
		}
	}

	public List<AuthorDTO> authorsToAuthorDTOs(List<Author> authors) {
		return authors.stream().map(this::authorToAuthorDTO).toList();
	}
}
