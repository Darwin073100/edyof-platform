import { Button } from "@/presentation/components/ui/buttons";
import { TextInput } from "@/presentation/components/ui/inputs";
import { LabelInput } from "@/presentation/components/ui/labels";

export default function (){
    return (
        <>
        <div className="flex w-full justify-center">
            <form className="bg-white w-[700px] rounded-2xl shadow-md p-8 flex flex-col gap-4">
                <h1 className="text-3xl font-bold mb-4">Informacion de la sucursal</h1>
                <div>
                    <LabelInput htmlFor="txtName" value="Nombre de la sucursal"/>
                    <TextInput name="txtName" placeholder="Los Tamarindos S.A. de C.V."/>
                </div>
                <div>
                    <LabelInput htmlFor="txtPostalCode" value="Codigo postal"/>
                    <TextInput name="txtPostalCode" placeholder="41700" type="number"/>
                </div>
                <div>
                    <LabelInput htmlFor="txtStreet" value="Nombre de la calle"/>
                    <TextInput name="txtStreet" placeholder="Juan Ruiz de Alarcón"/>
                </div>
                <div>
                    <LabelInput htmlFor="txtInteriorNumber" value="Numero interior"/>
                    <TextInput name="txtInteriorNumber" placeholder="14"/>
                </div>
                <div>
                    <LabelInput htmlFor="txtExteriorNumber" value="Numero exterior"/>
                    <TextInput name="txtExteriorNumber" placeholder="S/N"/>
                </div>
                <div>
                    <LabelInput htmlFor="txtDistrict" value="Distrito o municipio"/>
                    <TextInput name="txtDistrict" placeholder="Barrio de la Guadalupe, Ometepec"/>
                </div>
                <div>
                    <LabelInput htmlFor="txtCity" value="Ciudad"/>
                    <TextInput name="txtCity" placeholder="Ometepec"/>
                </div>
                <div>
                    <LabelInput htmlFor="txtState" value="Estado"/>
                    <TextInput name="txtState" placeholder="Guerrero"/>
                </div>
                <Button color="blue">Guardar</Button>
            </form>
        </div>
        </>
    )
}