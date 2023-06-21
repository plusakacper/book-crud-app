package pl.bookapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import pl.bookapp.domain.Author;
import pl.bookapp.domain.Book;
import pl.bookapp.dto.BookAddDTO;
import pl.bookapp.dto.BookDTO;
import pl.bookapp.dto.BookUpdateDTO;
import pl.bookapp.exception.AuthorException;
import pl.bookapp.exception.BookException;
import pl.bookapp.mapper.BookMapper;
import pl.bookapp.repository.AuthorRepository;
import pl.bookapp.repository.BookRepository;

@Service
public class BookService {

	private final BookRepository bookRepository;
	private final AuthorRepository authorRepository;
	private final BookMapper bookMapper;

	public BookService(BookRepository bookRepository, AuthorRepository authorRepository, BookMapper bookMapper) {
		this.bookRepository = bookRepository;
		this.authorRepository = authorRepository;
		this.bookMapper = bookMapper;
	}

	public BookDTO getById(Long id) throws BookException {
		Optional<Book> bookOpt = bookRepository.findById(id);
		Book book = bookOpt.orElseThrow(() -> new BookException("Book not found"));
		return bookMapper.bookToBookDTO(book);
	}

	public List<BookDTO> getAll() {
		List<Book> books = bookRepository.findAll();
		return bookMapper.booksToBookDTOs(books);
	}

	public void add(BookAddDTO bookDTO) throws AuthorException {
		Author author = authorRepository.findById(bookDTO.getAuthorId())
				.orElseThrow(() -> new AuthorException("Author not found"));

		Book newBook = new Book(bookDTO.getTitle(), bookDTO.getDescription(), bookDTO.getCategory(), author);
		bookRepository.save(newBook);
	}

	public void update(BookUpdateDTO bookDTO) throws BookException {
		Optional<Book> bookOpt = bookRepository.findById(bookDTO.getId());
		Book book = bookOpt.orElseThrow(() -> new BookException("Book not found"));
		book.setTitle(bookDTO.getTitle());
		book.setDescription(bookDTO.getDescription());
		book.setCategory(bookDTO.getCategory());
		bookRepository.save(book);
	}

	public void remove(Long id) throws BookException {
		Optional<Book> bookOpt = bookRepository.findById(id);
		Book book = bookOpt.orElseThrow(() -> new BookException("Book not found"));
		bookRepository.delete(book);
	}

}
