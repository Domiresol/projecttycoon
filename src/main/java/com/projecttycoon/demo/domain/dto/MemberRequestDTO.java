package com.projecttycoon.demo.domain.dto;


import com.projecttycoon.demo.domain.TimeStamp;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class MemberRequestDTO extends TimeStamp {
    private String memberId;
    private String memberPw;
    private String memberRole;
    private String memberIntroduce;
    private String memberFilePath; //멤버프로필 이미지경로
    private String memberFileName; //멤버프로필 이미지네임
    private String memberLink;
    private String memberAcademy;
    private String memberNickname;
}
