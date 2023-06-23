package pl.bookapp.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import pl.bookapp.dto.BookAddDTO;
import pl.bookapp.dto.BookDTO;
import pl.bookapp.dto.BookUpdateDTO;
import pl.bookapp.exception.AuthorException;
import pl.bookapp.exception.BookException;
import pl.bookapp.service.BookService;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

	private final BookService bookService;

	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

	@GetMapping
	public ResponseEntity<List<BookDTO>> getAll() {
		return ResponseEntity.ok(bookService.getAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<BookDTO> getById(@PathVariable Long id) throws BookException {
		return ResponseEntity.ok(bookService.getById(id));
	}

	@PostMapping
	public ResponseEntity<Void> add(@Valid @RequestBody BookAddDTO bookDTO) throws AuthorException {
		bookService.add(bookDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Void> update(@Valid @RequestBody BookUpdateDTO bookDTO)
			throws BookException, AuthorException {
		bookService.update(bookDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(@PathVariable Long id) throws BookException {
		bookService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
