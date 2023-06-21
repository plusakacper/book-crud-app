package pl.bookapp.dto;

import java.util.Objects;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class BookAddDTO {

	@NotBlank
	@Size(max = 255)
	private String title;
	@Size(max = 255)
	private String description;
	@NotBlank
	@Size(max = 255)
	private String category;
	@NotNull
	private Long authorId;

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

	public Long getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Long authorId) {
		this.authorId = authorId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(authorId, category, description, title);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookAddDTO other = (BookAddDTO) obj;
		return Objects.equals(authorId, other.authorId) && Objects.equals(category, other.category)
				&& Objects.equals(description, other.description) && Objects.equals(title, other.title);
	}

	@Override
	public String toString() {
		return "BookAddDTO [title=" + title + ", description=" + description + ", category=" + category + ", authorId="
				+ authorId + "]";
	}

}
