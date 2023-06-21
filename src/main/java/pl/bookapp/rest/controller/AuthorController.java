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
import pl.bookapp.dto.AuthorAddDTO;
import pl.bookapp.dto.AuthorDTO;
import pl.bookapp.dto.AuthorUpdateDTO;
import pl.bookapp.exception.AuthorException;
import pl.bookapp.service.AuthorService;

@RestController
@RequestMapping("/api/v1/authors")
public class AuthorController {

	private final AuthorService authorService;

	public AuthorController(AuthorService authorService) {
		this.authorService = authorService;
	}

	@GetMapping
	public ResponseEntity<List<AuthorDTO>> getAll() {
		return ResponseEntity.ok(authorService.getAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<AuthorDTO> getById(@PathVariable Long id) throws AuthorException {
		return ResponseEntity.ok(authorService.getById(id));
	}

	@PostMapping
	public ResponseEntity<Void> add(@Valid @RequestBody AuthorAddDTO authorDTO) throws AuthorException {
		authorService.add(authorDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Void> update(@Valid @RequestBody AuthorUpdateDTO authorDTO) throws AuthorException {
		authorService.update(authorDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(@PathVariable Long id) throws AuthorException {
		authorService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
