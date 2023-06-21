package pl.bookapp.rest.error;

import org.springframework.http.HttpStatus;
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

}
