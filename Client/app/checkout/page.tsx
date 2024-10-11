import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Page(){
    return(
        <div className="flex flex-col">
            <h1>Checkout</h1>
            <div className="p-4 flex flex-col gap-4">
                <Card className="w-96 p-4">
                    <CardTitle className="my-3">Item 1</CardTitle>
                    <CardContent className="flex flex-col gap-4">
                        <p>Description of item 1</p>
                        <p>Price: $10.00</p>
                        <p>Quantity: 2</p>
                    </CardContent>
                </Card>
                <footer>Total: $20.00</footer>
            </div>
            
        </div>
    )
}