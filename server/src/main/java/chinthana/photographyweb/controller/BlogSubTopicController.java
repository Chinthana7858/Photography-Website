package chinthana.photographyweb.controller;

import chinthana.photographyweb.entity.BlogSubTopic;
import chinthana.photographyweb.service.BlogSubTopicService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/blogSubTopic")
@AllArgsConstructor
public class BlogSubTopicController {
    private final BlogSubTopicService blogSubTopicService;

    @PostMapping("/create")
    public ResponseEntity<BlogSubTopic> createBlogSubTopic(@RequestParam String blogId,
                                                           @RequestParam int subTopicNo,
                                                           @RequestParam String subTitle,
                                                           @RequestParam String content,
                                                           @RequestParam("file") MultipartFile subTopicPhoto) throws IOException {
        BlogSubTopic createdSubTopic = blogSubTopicService.createBlogSubTopic(blogId, subTopicNo, subTitle, content, subTopicPhoto);
        return ResponseEntity.ok(createdSubTopic);
    }
}
