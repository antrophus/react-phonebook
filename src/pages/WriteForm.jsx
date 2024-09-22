//import 라이브러리
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트

//import css

const WriteForm = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [company, setCompany] = useState("");

    const navigate = useNavigate();
    
    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleName = (name) => {
        console.log('이름입력');
        setName(name.target.value);
    };
    const handleHp = (hp) => {
        console.log('핸드폰번호입력');
        setHp(hp.target.value);
    };
    const handleCompany = (company) => {
        console.log('회사입력');
        setCompany(company.target.value);
    };

    //저장
    const handleAdd = (e) =>{
        e.preventDefault();

        const personVo = {
            name: name,
            hp: hp,
            company: company
        }
        console.log(personVo);
    
        axios({
            method: 'post',
            url: 'http://localhost:9000/api/persons',

            headers: { 'Content-Type': 'application/json; charset=utf-8'},
            data: personVo,

            responseType: 'json'
        }).then(response => {
            console.log(response);
            console.log(response.data);

            if(response.data === 1){
                //리다이랙트
                navigate('/list');
            }else {
                alert('등록실패')
            }

        }).catch(error => {
            console.log(error);
            
        })
    }

    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-등록폼</h2>

            <p>아래의 항목을 입력한 후 등록버튼을 클릭해 주세요</p>

            <form action="" method="" onSubmit={handleAdd}>
                <div>
                    <label for="txt-name">이름(name):</label>
                    <input id="txt-name" type="text" name="" value={name} placeholder="이름" onChange={handleName} />
                </div>

                <div>
                    <label for="txt-hp">핸드폰(hp):</label>
                    <input id="txt-hp" type="text" name="" value={hp} placeholder="핸드폰" onChange={handleHp} />
                </div>

                <div>
                    <label for="txt-company">회사(company):</label>
                    <input id="txt-company" type="text" name="company" value={company} placeholder="회사" onChange={handleCompany}/>
                </div>
                {/* 숨김<input type="text" name="action" value="insert" /> */}
                <br />
                <button type="submit">등록(전송)</button>
            </form>


            <br /><br />
            <Link to="/list" rel="noreferrer noopener">리스트로 가기</Link>
        </>
    );
}

export default WriteForm;
