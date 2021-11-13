import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.322),
			rgba(255, 255, 255, 0.233)
		),
		url("https://cdn.pling.com/img/4/7/2/7/2fcc5d65e6e6e8000669f79fa3000f10ab2ad19122f8c16f487fe630a324eea2d1a6.jpg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	padding: 20px;
	width: 25%;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;

	&:hover {
		color: #fff8f8;
		background-color: #0a6e6e;
	}
`;

const Link = styled.a`
	font-size: 12px;
	margin: 7px 0px;
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		color: #aa9f6d;
	}
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />

					<Input placeholder="password" />

					<Button>LOGIN</Button>
					<Link>FORGOT PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
