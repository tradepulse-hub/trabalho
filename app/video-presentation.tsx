"use client"

import { useState, useEffect } from "react"
import { CSSProperties } from 'react';

// Importar componentes de slide - GARANTIR QUE CADA UM TEM 'export default'
import IntroSlide from "@/components/slides/intro-slide";
import VideoSlide from "@/components/slides/video-slide";
import BusinessPlanTitleSlide from "@/components/slides/business-plan-title-slide";
import SummaryExecutiveSlide from "@/components/slides/summary-executive-slide";
import CompanyIdentificationSlide1 from "@/components/slides/company-identification-slide-1";
import CompanyIdentificationSlide2 from "@/components/slides/company-identification-slide-2";
import BusinessConceptSlide1 from "@/components/slides/business-concept-slide-1";
import BusinessConceptSlide2 from "@/components/slides/business-concept-slide-2";
import BusinessConceptSlide3 from "@/components/slides/business-concept-slide-3";
import LocationOperationSlide1 from "@/components/slides/location-operation-slide-1";
import LocationOperationSlide2 from "@/components/slides/location-operation-slide-2";
import MissionVisionValuesSlide1 from "@/components/slides/mission-vision-values-slide-1";
import MissionVisionValuesSlide2 from "@/components/slides/mission-vision-values-slide-2";
import HrNeedsSkillsSlide from "@/components/slides/hr-needs-skills-slide";
import HrFunctionsSlide1 from "@/components/slides/hr-functions-slide-1";
import HrFunctionsSlide2 from "@/components/slides/hr-functions-slide-2";
import HrFunctionsSlide3 from "@/components/slides/hr-functions-slide-3";
import HrPolicySlide1 from "@/components/slides/hr-policy-slide-1";
import HrPolicySlide2 from "@/components/slides/hr-policy-slide-2";
import SwotAnalysisSlide1 from "@/components/slides/swot-analysis-slide-1";
import SwotAnalysisSlide2 from "@/components/slides/swot-analysis-slide-2";
import SwotAnalysisSlide3 from "@/components/slides/swot-analysis-slide-3";
import SwotAnalysisSlide4 from "@/components/slides/swot-analysis-slide-4";
import PestaAnalysisSlide1 from "@/components/slides/pesta-analysis-slide-1";
import PestaAnalysisSlide2 from "@/components/slides/pesta-analysis-slide-2";
import MarketSegmentationSlide1 from "@/components/slides/market-segmentation-slide-1";
import MarketSegmentationSlide2 from "@/components/slides/market-segmentation-slide-2";
import CurrentSituationEvolutionSlide from "@/components/slides/current-situation-evolution-slide";
import CompetitionAnalysisSlide1 from "@/components/slides/competition-analysis-slide-1";
import CompetitionAnalysisSlide2 from "@/components/slides/competition-analysis-slide-2";
import MarketingMixProductSlide from "@/components/slides/marketing-mix-product-slide";
import MarketingMixPriceSlide from "@/components/slides/marketing-mix-price-slide";
import MarketingMixCommunicationSlide from "@/components/slides/marketing-mix-communication-slide";
import MarketingMixDistributionSlide from "@/components/slides/marketing-mix-distribution-slide";
import MarketingMixPeopleSlide from "@/components/slides/marketing-mix-people-slide";
import MarketingMixProcessSlide from "@/components/slides/marketing-mix-process-slide";
import MarketingMixPhysicalEvidenceSlide from "@/components/slides/marketing-mix-physical-evidence-slide";
import BcgMatrixSlide from "@/components/slides/bcg-matrix-slide";
import SmartObjectivesSlide1 from "@/components/slides/smart-objectives-slide-1";
import SmartObjectivesSlide2 from "@/components/slides/smart-objectives-slide-2";
import SmartObjectivesSlide3 from "@/components/slides/smart-objectives-slide-3";
import SmartObjectivesSlide4 from "@/components/slides/smart-objectives-slide-4";
import StrategiesImplementationSlide1 from "@/components/slides/strategies-implementation-slide-1";
import StrategiesImplementationSlide2 from "@/components/slides/strategies-implementation-slide-2";
import StrategiesImplementationSlide3 from "@/components/slides/strategies-implementation-slide-3";
import FinancialPlanningViabilitySlide from "@/components/slides/financial-planning-viability-slide";
import ViabilityConclusionSlide from "@/components/slides/viability-conclusion-slide";
import { SlideProps } from "@/types/slide-props";


export default function VideoPresentation() {
  const mainTitle = "Hamburgueria Vila Nova"
  const introFullText = "Prepare-se para uma experiência de sabor inesquecível..." // Mensagem de incentivo
  const introTypingSpeed = 30 // Velocidade da digitação da intro (ms por letra)
  const introDisplayDuration = 1500 // Duração que a mensagem da intro fica visível após digitar (ms)

  // 0: Intro, 1: Video Principal, 2+: Slides do Plano de Negócios
  const [currentStage, setCurrentStage] = useState(0)
  const [displayedMainTitle, setDisplayedMainTitle] = useState("")
  const [mainTitleIndex, setMainTitleIndex] = useState(0)
  const [displayedIntroText, setDisplayedIntroText] = useState("")
  const [introTextIndex, setIntroTextIndex] = useState(0)

  // Efeito de digitação da mensagem de introdução (Stage 0)
  useEffect(() => {
    if (currentStage === 0 && introTextIndex < introFullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedIntroText((prev) => prev + introFullText[introTextIndex])
        setIntroTextIndex((prev) => prev + 1)
      }, introTypingSpeed)
      return () => clearTimeout(typingTimer)
    }
  }, [introTextIndex, introFullText, introTypingSpeed, currentStage])

  // Timer para a tela preta de introdução desaparecer automaticamente (Stage 0 -> 1)
  useEffect(() => {
    if (currentStage === 0 && introTextIndex === introFullText.length) {
      const introTimer = setTimeout(
        () => {
          setCurrentStage(1) // Auto-avançar para o vídeo
        },
        introFullText.length * introTypingSpeed + introDisplayDuration,
      )
      return () => clearTimeout(introTimer)
    }
  }, [introTextIndex, introFullText, introTypingSpeed, introDisplayDuration, currentStage])

  // Efeito de digitação do título principal (Stage 1)
  useEffect(() => {
    if (currentStage === 1 && mainTitleIndex < mainTitle.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedMainTitle((prev) => prev + mainTitle[mainTitleIndex])
        setMainTitleIndex((prev) => prev + 1)
      }, 100) // Velocidade da digitação do título principal
      return () => clearTimeout(typingTimer)
    }
  }, [mainTitleIndex, mainTitle, currentStage])

  // Listener para as teclas seta para a direita e esquerda
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentStage((prevStage) => {
          // Define o número máximo de slides (ajuste conforme adicionar mais)
          const maxStage = 46 // Total de slides: 0 (intro) + 1 (video) + 1 (novo título) + 44 (plano de negócios)
          return Math.min(prevStage + 1, maxStage)
        })
      } else if (event.key === "ArrowLeft") {
        setCurrentStage((prevStage) => {
          return Math.max(prevStage - 1, 0) // Não permite ir para estágio negativo
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Estilo de sombra de texto para títulos (brilho branco e contorno dourado)
  const titleTextShadowStyle: CSSProperties = {
    textShadow: `
      0 0 15px rgba(255,255,255,0.8),
      0 0 25px rgba(255,255,255,0.6),
      0 0 35px rgba(255,255,255,0.4),
      1px 1px 0px #FFD700,
      -1px -1px 0px #FFD700,
      1px -1px 0px #FFD700,
      -1px 1px 0px #FFD700,
      0 0 5px #FFD700,
      0 0 10px #FFD700
    `,
  }

  // Estilos comuns para os slides do plano de negócios
  const commonSlideStyle =
    "w-screen h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 overflow-y-auto"
  const headingStyle = "text-black text-4xl md:text-5xl font-bold mb-6 text-center"
  const subHeadingStyle = "text-black text-3xl md:text-4xl font-semibold mb-4 text-center"
  const textStyle = "text-gray-100 text-lg md:text-xl text-center max-w-4xl mb-4 font-serif"
  const listStyle = "list-disc list-inside text-gray-100 text-lg md:text-xl max-w-4xl text-left font-serif"
  const listItemStyle = "mb-2"

  const slideProps: SlideProps = {
    titleTextShadowStyle,
    commonSlideStyle,
    headingStyle,
    subHeadingStyle,
    textStyle,
    listStyle,
    listItemStyle,
  };

  // Renderização condicional dos slides
  switch (currentStage) {
    case 0:
      return <IntroSlide displayedIntroText={displayedIntroText} titleTextShadowStyle={titleTextShadowStyle} />;
    case 1:
      return <VideoSlide displayedMainTitle={displayedMainTitle} titleTextShadowStyle={titleTextShadowStyle} />;
    case 2:
      return <BusinessPlanTitleSlide {...slideProps} />;
    case 3:
      return <SummaryExecutiveSlide {...slideProps} />;
    case 4:
      return <CompanyIdentificationSlide1 {...slideProps} />;
    case 5:
      return <CompanyIdentificationSlide2 {...slideProps} />;
    case 6:
      return <BusinessConceptSlide1 {...slideProps} />;
    case 7:
      return <BusinessConceptSlide2 {...slideProps} />;
    case 8:
      return <BusinessConceptSlide3 {...slideProps} />;
    case 9:
      return <LocationOperationSlide1 {...slideProps} />;
    case 10:
      return <LocationOperationSlide2 {...slideProps} />;
    case 11:
      return <MissionVisionValuesSlide1 {...slideProps} />;
    case 12:
      return <MissionVisionValuesSlide2 {...slideProps} />;
    case 13:
      return <HrNeedsSkillsSlide {...slideProps} />;
    case 14:
      return <HrFunctionsSlide1 {...slideProps} />;
    case 15:
      return <HrFunctionsSlide2 {...slideProps} />;
    case 16:
      return <HrFunctionsSlide3 {...slideProps} />;
    case 17:
      return <HrPolicySlide1 {...slideProps} />;
    case 18:
      return <HrPolicySlide2 {...slideProps} />;
    case 19:
      return <SwotAnalysisSlide1 {...slideProps} />;
    case 20:
      return <SwotAnalysisSlide2 {...slideProps} />;
    case 21:
      return <SwotAnalysisSlide3 {...slideProps} />;
    case 22:
      return <SwotAnalysisSlide4 {...slideProps} />;
    case 23:
      return <PestaAnalysisSlide1 {...slideProps} />;
    case 24:
      return <PestaAnalysisSlide2 {...slideProps} />;
    case 25:
      return <MarketSegmentationSlide1 {...slideProps} />;
    case 26:
      return <MarketSegmentationSlide2 {...slideProps} />;
    case 27:
      return <CurrentSituationEvolutionSlide {...slideProps} />;
    case 28:
      return <CompetitionAnalysisSlide1 {...slideProps} />;
    case 29:
      return <CompetitionAnalysisSlide2 {...slideProps} />;
    case 30:
      return <MarketingMixProductSlide {...slideProps} />;
    case 31:
      return <MarketingMixPriceSlide {...slideProps} />;
    case 32:
      return <MarketingMixCommunicationSlide {...slideProps} />;
    case 33:
      return <MarketingMixDistributionSlide {...slideProps} />;
    case 34:
      return <MarketingMixPeopleSlide {...slideProps} />;
    case 35:
      return <MarketingMixProcessSlide {...slideProps} />;
    case 36:
      return <MarketingMixPhysicalEvidenceSlide {...slideProps} />;
    case 37:
      return <BcgMatrixSlide {...slideProps} />;
    case 38:
      return <SmartObjectivesSlide1 {...slideProps} />;
    case 39:
      return <SmartObjectivesSlide2 {...slideProps} />;
    case 40:
      return <SmartObjectivesSlide3 {...slideProps} />;
    case 41:
      return <SmartObjectivesSlide4 {...slideProps} />;
    case 42:
      return <StrategiesImplementationSlide1 {...slideProps} />;
    case 43:
      return <StrategiesImplementationSlide2 {...slideProps} />;
    case 44:
      return <StrategiesImplementationSlide3 {...slideProps} />;
    case 45:
      return <FinancialPlanningViabilitySlide {...slideProps} />;
    case 46:
      return <ViabilityConclusionSlide {...slideProps} />;
    default:
      return null;
  }
}
