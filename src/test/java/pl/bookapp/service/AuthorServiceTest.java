package pl.bookapp.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.context.SpringBootTest;

import pl.bookapp.domain.Author;
import pl.bookapp.dto.AuthorDTO;
import pl.bookapp.exception.AuthorException;
import pl.bookapp.mapper.AuthorMapper;
import pl.bookapp.repository.AuthorRepository;

@SpringBootTest
public class AuthorServiceTest {

	@Mock
	private AuthorRepository authorRepository;
	@InjectMocks
	private AuthorService authorService;
	@Spy
	private AuthorMapper authorMapper;

	@Test
	void shouldReturnAllAuthors() {
		Author author1 = new Author("Test1", "Test1", LocalDate.now());
		Author author2 = new Author("Test2", "Test2", LocalDate.now());
		List<Author> authors = Arrays.asList(author1, author2);

		when(authorRepository.findAll()).thenReturn(authors);

		List<AuthorDTO> findedAuthors = authorService.getAll();
		assertEquals(authors.size(), findedAuthors.size());
	}

	@Test
	void shouldReturnAuthorWithGivenId() throws AuthorException {
		Author author1 = new Author("Test1", "Test1", LocalDate.now());
		author1.setId(1L);
		when(authorRepository.findById(1L)).thenReturn(Optional.of(author1));

		AuthorDTO findedAuthor = authorService.getById(1L);
		assertEquals(author1.getId(), findedAuthor.getId());
	}

}
