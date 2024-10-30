export default function Item({name, quantity, category}) {
    return (
        <div className="bg-cyan-950 w-1/3 m-4 p-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}