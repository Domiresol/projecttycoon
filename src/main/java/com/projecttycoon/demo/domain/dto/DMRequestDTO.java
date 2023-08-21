package com.projecttycoon.demo.domain.dto;


import com.projecttycoon.demo.domain.Entity.DMEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


//데이터를 실제로 이동시키는 클래스이다.
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class DMRequestDTO {
    private String DMFromId;

    private String DMToId;

    private String DMContent;

    private Long DMroomId;

    private boolean DMRead;

    public static DMRequestDTO DMDto(DMEntity dm) {
        return new DMRequestDTO(
                dm.getDMFrom().getMemberId(),
                dm.getDMTo().getMemberId(),
                dm.getDMContent(),
                dm.getDMroom().getDMroomId(),
                dm.isDMRead()
        );
    }
}