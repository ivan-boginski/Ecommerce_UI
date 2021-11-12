import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	/* Importan notes here
  if the child set to position: absolute;
  then the parrent will be set to position: relative;
  */
	position: relative;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 50px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Image = styled.img`
	height: 80%;
	/* width: 50rem; */
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fffafa;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};

	margin: auto;
	cursor: pointer;
	opacity: 0.5;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper>
				<Slide>
					<ImgContainer>
						<Image src="https://qerdus.com/wp-content/uploads/2021/06/cutefish-linux-desktop-environment-on-arch.jpg" />
					</ImgContainer>
					<InfoContainer>
						<Title>Lorem, ipsum.</Title>
						<Desc>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
							deserunt!
						</Desc>
						<Button>Show Now</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Image src="https://qerdus.com/wp-content/uploads/2021/06/cutefish-linux-desktop-environment-on-arch.jpg" />
					</ImgContainer>
					<InfoContainer>
						<Title>Lorem, ipsum.</Title>
						<Desc>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
							deserunt!
						</Desc>
						<Button>Show Now</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
