import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
	opacity: 0;

	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease-in;

	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f8f6f6f8;
	position: relative;

	/* Notes that before we can use to hover we have to declare the Info above this Container */
	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	height: 200px;
	width: 200px;
	border-radius: 50%;
	background-color: #f8f6f6;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;

	/* Animation when hover on the icons */
	transition: all 0.5s ease-in;

	&:hover {
		background-color: #fff2f2;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
