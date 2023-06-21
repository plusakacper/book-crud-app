package pl.bookapp.mapper;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Component;

import pl.bookapp.domain.Book;
import pl.bookapp.dto.BookDTO;

@Component
public class BookMapper {

	public BookDTO bookToBookDTO(Book book) {
		if (Objects.isNull(book)) {
			return null;
		} else {
			BookDTO bookDTO = new BookDTO();
			bookDTO.setId(book.getId());
			bookDTO.setTitle(book.getTitle());
			bookDTO.setDescription(book.getDescription());
			bookDTO.setCategory(book.getCategory());
			bookDTO.setAuthorFirstName(book.getAuthor().getFirstName());
			bookDTO.setAuthorSurname(book.getAuthor().getSurname());
			return bookDTO;
		}
	}

	public List<BookDTO> booksToBookDTOs(List<Book> books) {
		return books.stream().map(this::bookToBookDTO).toList();
	}

}
