import * as React from 'react'
import DefaultLayout from '../../../components/DefaultLayout/DefaultLayout'
import { Button, Input } from 'antd'
import { Auth } from 'aws-amplify'

class Register extends React.Component<{}> {

    register = async () => {
        const username = document.getElementById('username') as HTMLInputElement
        const email = document.getElementById('email') as HTMLInputElement
        const password = document.getElementById('password') as HTMLInputElement

        try {
            const data = await Auth.signUp(username.value, password.value, email.value)
            console.log('DATA: ', data)
        } catch (error) {
            console.log('ERROR: ', error)
        }

        console.log('REGISTER!', email.value, password.value)
    }

    render() {

        return (
            <DefaultLayout>
                <Input type="text" id="username" placeholder="Username" />
                <Input type="text" id="email" placeholder="Email" />
                <Input type="password" id="password" placeholder="Password" />
                <Button type="primary" onClick={this.register}>Register</Button>
            </DefaultLayout>
        )
    }
}

export default Register