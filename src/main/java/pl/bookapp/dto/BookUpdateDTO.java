package pl.bookapp.dto;

import java.util.Objects;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class BookUpdateDTO {

	@NotNull
	private Long id;
	@NotBlank
	@Size(max = 255)
	private String title;
	@Size(max = 255)
	private String description;
	@NotBlank
	@Size(max = 255)
	private String category;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public int hashCode() {
		return Objects.hash(category, description, id, title);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookUpdateDTO other = (BookUpdateDTO) obj;
		return Objects.equals(category, other.category) && Objects.equals(description, other.description)
				&& Objects.equals(id, other.id) && Objects.equals(title, other.title);
	}

	@Override
	public String toString() {
		return "BookUpdateDTO [id=" + id + ", title=" + title + ", description=" + description + ", category="
				+ category + "]";
	}

}
