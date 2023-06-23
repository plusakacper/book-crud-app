package pl.bookapp.dto;

public class BookDTO {

	private Long id;
	private String title;
	private String description;
	private String category;
	private Long authorId;
	private String authorFirstName;
	private String authorSurname;

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

	public Long getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Long authorId) {
		this.authorId = authorId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAuthorFirstName() {
		return authorFirstName;
	}

	public void setAuthorFirstName(String authorFirstName) {
		this.authorFirstName = authorFirstName;
	}

	public String getAuthorSurname() {
		return authorSurname;
	}

	public void setAuthorSurname(String authorSurname) {
		this.authorSurname = authorSurname;
	}

	@Override
	public String toString() {
		return "BookDTO [id=" + id + ", title=" + title + ", description=" + description + ", category=" + category
				+ ", authorFirstName=" + authorFirstName + ", authorSurname=" + authorSurname + "]";
	}

}
