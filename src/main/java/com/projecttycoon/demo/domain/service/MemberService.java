package com.projecttycoon.demo.domain.service;

import com.projecttycoon.demo.domain.Entity.MemberRoleEntity;
import com.projecttycoon.demo.domain.dto.MemberRequestDTO;
import com.projecttycoon.demo.domain.Entity.MemberEntity;
import com.projecttycoon.demo.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


//실제 프로그램의 서비스로직을 정의한 클래스
@Log4j2
@Service
@RequiredArgsConstructor
public class MemberService  {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public void registerMember(MemberRequestDTO requestDTO) {
        log.info("requestDTO check MemberPw : "+requestDTO.getMemberPw());
        requestDTO.setMemberPw(bCryptPasswordEncoder.encode(requestDTO.getMemberPw()));
        MemberEntity memberEntity = new MemberEntity(requestDTO);
        memberEntity.addMemberRole(MemberRoleEntity.USER);
        memberRepository.save(memberEntity);
    }

    public void memberUpdate(String memberId, MemberRequestDTO requestDTO) {
        Optional<MemberEntity> result = memberRepository.findById(memberId);
        if (result.isPresent()) {
            MemberEntity memberEntity;
            memberEntity = result.get();

            requestDTO.setMemberPw(bCryptPasswordEncoder.encode(requestDTO.getMemberPw()));

            memberEntity.memberUpdate(requestDTO);
            memberRepository.save(memberEntity);
        }
    }

    public void memberDelete(String memberId) {
        memberRepository.deleteById(memberId);
    }

}