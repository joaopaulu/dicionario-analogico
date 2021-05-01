package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.Article;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
public class ArticleDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @NotBlank(message = "Campo obrigatório")
    private String title;

    @NotBlank(message = "Campo obrigatório")
    private String intro;

    @NotBlank(message = "Campo obrigatório")
    private String content;
    private String imageUrl;

    public ArticleDTO() {
    }

    public ArticleDTO(Long id, String title, String intro, String content, String imageUrl) {
        this.id = id;
        this.title = title;
        this.intro = intro;
        this.content = content;
        this.imageUrl = imageUrl;
    }

    public ArticleDTO(Article entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.intro = entity.getIntro();
        this.content = entity.getContent();
        this.imageUrl = entity.getImageUrl();
    }
}
