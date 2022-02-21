import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                我是详情页
                {this.props.match.params.id}
                <button onClick={()=>{
                    // 返回上一页
                    // this.props.history.goBack();
                    this.props.history.go(-1);

                }}>返回</button>
            </div>
        );
    }
}

export default Detail;