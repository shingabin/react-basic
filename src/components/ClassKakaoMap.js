import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KakaoMap extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <h2><a href="/">클래스형 전기차 충전소 위치</a></h2>
                {/* {memberList.map((member) => <div key={member.email}>{member.name}</div>)} */}
                {/*memberList.forEach((member) => <div key={member.email}>{member.name}</div>)*/}
            </div>
        );
    }
}

KakaoMap.propTypes = {

};

export default KakaoMap;