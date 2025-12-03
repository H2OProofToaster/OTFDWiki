import Card from "@/app/components/card";
import InfoBox from "@/app/components/infoBox";

export default function HomePage() {
    return (
        <main>\
            <Card name={"A Single Dot"} effect={"Gain +x points per draw."} rarity={"normal"} tagline={"ここにいる"} />
            <InfoBox/>
        </main>
    );
}