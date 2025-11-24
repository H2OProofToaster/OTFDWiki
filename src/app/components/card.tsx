type CardProps = {
    name: string;
    rarity: string;
    effect: string;
    tagline: string;

}

export default function Card({ name, rarity, effect, tagline }: CardProps) {
    return (
        <div className="card">
            <div className="card-name">
                <p>
                    Name: {name}
                </p>
            </div>
            <div className="card-rarity">
                <p>
                    Rarity: {rarity}
                </p>
            </div>
            <div className="card-effect">
                <p>
                    Effect: {effect}
                </p>
            </div>
            <div className="card-tagline">
                <p>
                    Tagline: {tagline}
                </p>
            </div>
        </div>
    );
}