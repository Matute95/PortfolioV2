import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
		<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2021</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>10 Minds</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}:{" "}
						<span>{language.experiencePage.timeline.title3}</span>
					</BoldText>
					<BoldText><a href="https://drive.google.com/file/d/1HUdAZ0UZ0FXZEx72XFtjuqx_BupBrsg9/view" target={"_blank"}>
						<span>{language.experiencePage.timeline.cert}</span></a>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
			iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
			icon={<LearningAppIcon />}>
			<TimelineContent>
				<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2021</h3>
				<BoldText>
					{language.experiencePage.timeline.labelInstitution}: <span>10 Minds</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelTitle}:{" "}
					<span>{language.experiencePage.timeline.title4}</span>
				</BoldText>
				<BoldText><a href="https://drive.google.com/file/d/1KQfCMfjrDxqWF5B_b_Tlk-WLF0rrsApx/view" target={"_blank"}>
					<span>{language.experiencePage.timeline.cert}</span></a>
				</BoldText>
			</TimelineContent>
		</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>UAGRM</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}:{" "}
						<span>Ethical Pentester</span>
					</BoldText>
					<BoldText><a href="https://drive.google.com/file/d/1cejsWDBuS7Cz1nxryhI1Wrg9JYGFM185/view" target={"_blank"}>
						<span>{language.experiencePage.timeline.cert}</span></a>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
			iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
			icon={<WorkIcon />}>
			<TimelineContent>
				<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2020-2019</h3>
				<BoldText>
					{language.experiencePage.timeline.labelInstitution}: <span>Desarrollamelo</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelDep}: <span>Desarrollo</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelPosition}: <span>{language.experiencePage.timeline.job3}</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelFunc}: <span>
						<div>{language.experiencePage.timeline.job3_1}</div>
						<div>{language.experiencePage.timeline.job3_2}</div>
						<div>{language.experiencePage.timeline.job3_3}</div>
						<div>{language.experiencePage.timeline.job3_4}</div>
				</span>
				</BoldText><BoldText>
				{language.experiencePage.timeline.labelReference}: <span>
					<div> Ing. Ronald López: 77302270 </div>
			</span>
			</BoldText>
			</TimelineContent>
		</VerticalTimelineElement>

		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
			iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
			icon={<WorkIcon />}>
			<TimelineContent>
				<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2018</h3>
				<BoldText>
					{language.experiencePage.timeline.labelInstitution}: <span>UAGRM</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelDep}: <span>Dirección de Tecnología de la Información y Comunicación {"(DTIC)"}</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelPosition}: <span>{language.experiencePage.timeline.job2}</span>
				</BoldText>
				<BoldText>
					{language.experiencePage.timeline.labelFunc}: <span><div>{language.experiencePage.timeline.job2_1}</div>
				<div>{language.experiencePage.timeline.job2_2}</div><div>{language.experiencePage.timeline.job2_3}</div>
				</span>
				</BoldText><BoldText>
				{language.experiencePage.timeline.labelReference}: <span>
					<div> Ing. Ariel Vega: 78460987 </div>
			</span>
			</BoldText>
			</TimelineContent>
		</VerticalTimelineElement>
		
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2017</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Google</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}:{" "}
						<span>{language.experiencePage.timeline.title1}</span>
					</BoldText>
					<BoldText><a href="https://drive.google.com/file/d/1nqd5ph1d13k4fKIEJRHNoMy-bxrLqDPq/view" target={"_blank"}>
						<span>{language.experiencePage.timeline.cert}</span></a>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2017-2016</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>UAGRM</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelDep}: <span>{language.experiencePage.timeline.job1}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>{language.experiencePage.timeline.job1_1}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelFunc}: <span>{language.experiencePage.timeline.job1_2}</span><br />
						<span>{language.experiencePage.timeline.job1_3}</span><br /><span>{language.experiencePage.timeline.job1_4}</span><br />
						<span>{language.experiencePage.timeline.job1_5}</span><br /><span>{language.experiencePage.timeline.job1_6}</span><br />
						<span>{language.experiencePage.timeline.job1_7}</span><br />
					</BoldText><BoldText>
					{language.experiencePage.timeline.labelReference}: <span>
						<div> Lic. Luis Héctor Fuentes: 73126196 </div>
				</span>
				</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			{/*<VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<LearningAppIcon />} /> */}
		</VerticalTimeline>
	);
}
