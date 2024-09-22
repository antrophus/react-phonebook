//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트

//import css

const EditForm = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-수정폼</h2>

            <p>수정할 항목을 입력한 후 수정버튼을 클릭해 주세요</p>

            <form>
                <div>
                    <label for="txt-name">이름(name):</label>
                    <input id="txt-name" type="text" name="" value="" placeholder="이름" />
                </div>

                <div>
                    <label for="txt-hp">핸드폰(hp):</label>
                    <input id="txt-hp" type="text" name="" value="" placeholder="핸드폰" />
                </div>

                <div>
                    <label for="txt-company">회사(company):</label>
                    <input id="txt-company" type="text" name="" value="" placeholder="회사" />
                </div>

                <input type="text" name="action" value="update" />
                <input type="text" name="no" value="" />
                <br />
                <button type="submit">수정(전송)</button>
            </form>

            <br /><br />
            <Link to="/list" rel="noreferrer noopener">리스트로 가기</Link>
        </>
    );
}

export default EditForm;
