import React, { useState } from "react";
import {
	Container,
	makeStyles,
	Grid,
	Card,
	Box,
	CardContent,
	Typography,
	Button,
} from "@material-ui/core";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";

import { Swiper, SwiperSlide } from "swiper/react";
import locationContact from "../../../../assets/Icons/rentSec.png";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./rentCarousel.css";

// icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { SizeSearchBar } from "../../../../components/SizeSearchBar";
import { RentCarouselShort } from "./RentCarouselShort";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const RentCarousel = () => {
	const classes = useStyles();
	const [selected, setSelected] = useState(0);

	// const handleClick = (prop) => (event) => {
	// 	setSelected(prop.id);
	// };

	return (
		<>
			<div className="RentMainContainer">
				<div className="RentdesignContainer"></div>
				<div className={classes.AddMargin}>
					<div className="rentSwiper">
						<Grid container spacing={0}>
							<Grid item xs={12} md={12}>
								<Grid item style={{ padding: "1rem 0" }}>
									<Typography className={classes.heading}>
										Unsure on 	what size
										
										you need?
									</Typography>
								</Grid>
								<Grid
									item
									className={classes.requiresSizeContainer}
								>
									<Grid
										container
										className={classes.requiresSizeContent}
									>
										<SizeSearchBar
											selected={selected}
											setSelected={setSelected}
										/>
										<RentCarouselShort
											selected={selected}
											setSelected={setSelected}
											diableSelectButton
										/>
									</Grid>
								</Grid>
								{/* <Grid item md={12} className="imgslider">
									<Swiper navigation={true}>
										{requiredSizeData.map((item, key) => {
											return (
												<SwiperSlide
													style={{ width: "100%" }}
												>
													<Grid
														container
														sm={12}
														md={12}
													>
														<Grid
															item
															xs={12}
															sm={5}
															md={6}
															spacing={0}
															className={
																classes.flexImg
															}
														>
															<img
																className={
																	classes.srcImg
																}
																src={item.img}
																alt="1"
															/>
														</Grid>
														<Grid
															item
															xs={12}
															sm={5}
															md={6}
														>
															<Grid
																container
																className={
																	classes.rentContainer
																}
																lg={12}
															>
																<Grid
																	className={
																		classes.rentAlign
																	}
																	sm={12}
																	xs={12}
																	item
																	md={8}
																>
																	<Typography
																		variant="body1"
																		color="textSecondary"
																		className={
																			classes.storageText
																		}
																	>
																		STORAGE
																		ROOM
																	</Typography>
																</Grid>

																<Grid
																	className={
																		classes.rentAlign
																	}
																	item
																	xs={12}
																	lg={12}
																>
																	<Typography
																		className={
																			classes.BoldHeading
																		}
																	>
																		{
																			item.headingText
																		}{" "}
																	</Typography>
																</Grid>
																<Grid
																	className={
																		classes.rentAlign
																	}
																	sm={12}
																	xs={12}
																	item
																	md={8}
																>
																	<Typography
																		variant="body1"
																		color="textSecondary"
																		className={
																			classes.locatedmsg
																		}
																	>
																		{
																			item.paraText
																		}
																	</Typography>
																</Grid>
																<Grid
																	item
																	xs={12}
																	sm={12}
																	md={12}
																	className={
																		classes.rentAlign
																	}
																>
																	<Button
																		className={
																			classes.storageBtn
																		}
																	>
																		Rent Now
																	</Button>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</SwiperSlide>
											);
										})}
									</Swiper>
								</Grid> */}
								<Grid item lg={12}>
									<Typography
										variant="body1"
										color="textSecondary"
										className={classes.sendMessage}
									>
										Need a unique size?
										<span className={classes.cityLocation}>
											Send us a message
										</span>{" "}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	requiresSizeContainer: {
		display: "flex",
		justifyContent: "center",
	},
	requiresSizeContent: {
		maxWidth: "836px",
		marginLeft: "2px",
	},
	BoldHeading: {
		lineHeight: "105px",
		fontSize: "88px",
		fontWeight: "Bold",
		color: "#12356A",
		["@media (max-width: 965px) and (min-width: 713px)"]: {
			fontSize: 47,
		},
		["@media (max-width: 713px) and (min-width: 600px)"]: {
			fontSize: 27,
		},
		["@media (max-width: 600px) "]: {
			fontSize: 12,
			display: "flex",
			justifyContent: "center",
		},
	},
	AddMargin: {
		margin: 17,
	},
	rentContainer: {
		padding: " 3rem 0px",
		["@media (max-width: 600px) "]: {
			padding: " 1rem 0px",
		},
	},
	storageBtn: {
		backgroundColor: "#FFD300",
		color: "#064D7B",
		boxShadow: "0px 3px 8px #00000026",
		padding: "0.5rem 3.5rem",
		marginTop: "20px",
		borderRadius: theme.spacing(1),
		"&:hover": {
			background: "white",
			color: "#064D7B",
			boxShadow: "0px 3px 8px #00000026",
		},
	},
	sendMessage: {
		textAlign: "center",
		color: "#77838F",
		padding: "1rem 0",
	},
	heading: {
		textAlign: "center",
		color: "#064D7B",
		fontSize: "34px",
		fontWeight: "Bold",
		["@media (max-width: 600px) "]: {
			fontSize: 15,
		},
	},
	flexCenter: {
		display: "flex",
		justifyContent: "center",
	},
	flexImg: {
		display: "flex",
		justifyContent: "flex-end",
		paddingRight: 48,
		alignItems: " center",
		[theme.breakpoints.down("md")]: {
			justifyContent: "flex-end",
		},
		["@media (max-width: 965px) and (min-width: 600px)"]: {
			paddingRight: 8,
		},
		["@media (max-width: 600px)"]: {
			paddingRight: 0,
			justifyContent: "center",
		},
	},
	srcImg: {
		["@media (max-width: 965px) and (min-width: 713px)"]: {
			width: 214,
			height: 260,
		},
		["@media (max-width: 713px) and (min-width: 600px)"]: {
			width: 152,
			height: 198,
		},
		["@media (max-width: 600px)"]: {
			width: '9rem',
			height: 135,
		},
	},

	cardClass: {
		width: "227px",
		color: "#064D7B",
		height: "295px",
		border: "1px solid #064D7B",
		"&.selected": {
			boxShadow: "none",
			backgroundColor: "#0062cc",
			borderColor: "#064D7B",
			color: "#ffffff",
		},
	},
	cardContent: {
		height: "100%",
		color: "inherit",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		"& .MuiSvgIcon-root ": { fontSize: "7rem" },
	},
	cardHeading: {
		fontSize: "1.25rem",
		// color: "#12356A",
		color: "inherit",
	},
	rentAlign: {
		textAlign: "start",
		["@media (max-width: 600px)"]: {
			display: "flex",
			justifyContent: "center",
		},
	},
	cityLocation: {
		paddingLeft: 5,
		color: "rgb(12 92 144)",
	},
	locatedmsg: {
		color: "#77838F",
		fontSize: 17,
		["@media (max-width: 965px) and (min-width: 0px)"]: {
			fontSize: 10,
		},
		["@media  (max-width: 600px)"]: {
			width: "50%",
			textAlign: "center",
		},
	},
	storageText: {
		color: "#064D7B",
		fontSize: 16,
		letterSpacing: "2px",
		["@media (max-width: 965px) and (min-width: 0px)"]: {
			fontSize: 10,
		},
		["@media  (max-width: 600px)"]: {
			width: "50%",
			textAlign: "center",
		},
	},
	underlyingText: {
		position: "relative",
		zIndex: 0,
		marginLeft: 5,
	},
	underlying: {
		height: 6,
		width: "100%",
		backgroundColor: "#FFD300",
		position: "absolute",
		left: 0,
		bottom: 10,
		zIndex: -1,
		["@media (max-width: 600px) "]: {
			bottom: 5,
			height: 3,
		},
	},
}));

// card Data

const requiredSizeData = [
	{
		id: 1,
		img: locationContact,
		headingText: "15sqft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "25sqft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "35sqft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "50sqft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "75sqf",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "100sqft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "10ft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
	{
		id: 1,
		img: locationContact,
		headingText: "20ft",
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
	},
];
