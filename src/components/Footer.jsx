import {
	ContactMail,
	Facebook,
	Home,
	Instagram,
	Phone,
	Telegram,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff7f7ed" })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Lorem, ipsum.</Logo>
				<Desc>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
					quaerat quibusdam provident nemo voluptas illum officia eius, rem
					reprehenderit molestiae sapiente animi eligendi dicta aperiam?
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="83a7f3">
						<Telegram />
					</SocialIcon>
				</SocialContainer>
			</Left>

			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>

			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Home style={{ marginRight: "10px" }} />
					Perth, WA, Australia
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +61 834816237
				</ContactItem>
				<ContactItem>
					<ContactMail style={{ marginRight: "10px" }} />
					Dev@gmail.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
