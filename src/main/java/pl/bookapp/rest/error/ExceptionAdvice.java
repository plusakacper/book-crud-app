package pl.bookapp.rest.error;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import pl.bookapp.exception.AuthorException;
import pl.bookapp.exception.BookException;

@RestControllerAdvice
public class ExceptionAdvice {

	@ExceptionHandler(value = { BookException.class, AuthorException.class })
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public String exceptionHandler(Exception ex) {
		return ex.getMessage();
	}

	@ExceptionHandler(value = { MethodArgumentNotValidException.class })
	@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
	public ResponseEntity<Map<String, String>> validationHandler(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		return ResponseEntity.badRequest().body(errors);
	}

}
