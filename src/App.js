import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components";
import { CityProvider } from "./contexts/CityContext";
import FlightsPage from "./pages/FlightsPage/FlightsPage";
import OptionsPage from "./pages/OptionsPage/OptionsPage";

export default function App() {

    return (
        <AppContainer>
            <BrowserRouter>
                <CityProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/options" element={<OptionsPage />} />
                        <Route path="/flights" element={<FlightsPage />} />
                    </Routes>
                </CityProvider>
            </BrowserRouter>
        </AppContainer>
    )
}

const AppContainer = styled.div`

`;
