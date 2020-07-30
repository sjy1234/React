import React from "react";
import Login from "./login";

class Welcome extends React.Component {
    render() {
        const user = {
            name: "小红",
            avatarUrl: "../images/carrot10.png"
        }
        return (
            <div>
                <h1>hello {this.props.name}-----</h1>
                <Login />
                <Avatar user={user} />
            </div>
        )
    }
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}
        />
    );
}

export default Welcome;