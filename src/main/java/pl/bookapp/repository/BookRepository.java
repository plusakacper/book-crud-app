package pl.bookapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.bookapp.domain.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
