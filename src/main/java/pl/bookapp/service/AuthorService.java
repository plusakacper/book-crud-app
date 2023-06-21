package pl.bookapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import pl.bookapp.domain.Author;
import pl.bookapp.dto.AuthorAddDTO;
import pl.bookapp.dto.AuthorDTO;
import pl.bookapp.dto.AuthorUpdateDTO;
import pl.bookapp.exception.AuthorException;
import pl.bookapp.mapper.AuthorMapper;
import pl.bookapp.repository.AuthorRepository;

@Service
public class AuthorService {

	private final AuthorRepository authorRepository;
	private final AuthorMapper authorMapper;

	public AuthorService(AuthorRepository authorRepository, AuthorMapper authorMapper) {
		this.authorRepository = authorRepository;
		this.authorMapper = authorMapper;
	}

	public AuthorDTO getById(Long id) throws AuthorException {
		Optional<Author> authorOpt = authorRepository.findById(id);
		Author author = authorOpt.orElseThrow(() -> new AuthorException("Author not found"));
		return authorMapper.authorToAuthorDTO(author);
	}

	public List<AuthorDTO> getAll() {
		List<Author> authors = authorRepository.findAll();
		return authorMapper.authorsToAuthorDTOs(authors);
	}

	public void add(AuthorAddDTO authorDTO) {
		Author author = new Author(authorDTO.getFirstName(), authorDTO.getSurname(), authorDTO.getBirthdate());
		authorRepository.save(author);

	}

	public void update(AuthorUpdateDTO authorDTO) throws AuthorException {
		Optional<Author> authorOpt = authorRepository.findById(authorDTO.getId());
		Author author = authorOpt.orElseThrow(() -> new AuthorException("Author not found"));
		author.setFirstName(authorDTO.getFirstName());
		author.setSurname(authorDTO.getSurname());
		author.setBirthdate(authorDTO.getBirthdate());
		authorRepository.save(author);
	}

	public void remove(Long id) throws AuthorException {
		Optional<Author> authorOpt = authorRepository.findById(id);
		Author author = authorOpt.orElseThrow(() -> new AuthorException("Author not found"));
		if (!author.getBooks().isEmpty()) {
			throw new AuthorException("Author cannot be deleted, related books exist");
		}
		authorRepository.delete(author);
	}

}
