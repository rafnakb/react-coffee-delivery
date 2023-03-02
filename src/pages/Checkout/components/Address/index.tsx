import { MapPinLine } from "phosphor-react";
import { HeaderTitle } from "../HeaderTitle";
import { AddressContainer, Column, FormContainer, Input } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(2)
});

type NewAddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Address() {
  const {
    fillDeliveryAddress,
    address
  } = useContext(OrderContext);

  const addressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    },
    mode: 'onChange'
  })

  const { register, handleSubmit, formState: { errors, isValid } } = addressForm;

  useEffect(() => {
    handleSubmit(handleDeliveryAddressFilled)();
  }, [isValid])

  function handleDeliveryAddressFilled(data: NewAddressFormData) {
    fillDeliveryAddress(data, isValid);
  }

  return (
    <AddressContainer>
      <HeaderTitle
        icon={<MapPinLine size={22} />}
        iconColor={'yellowDark'}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
      />
      <FormContainer>
        <div>
          <Column numGrid={39}>
            <Input type="text" placeholder="CEP" {...register('cep')} />
          </Column>
        </div>
        <div>
          <Column numGrid={100}>
            <Input type="text" placeholder="Rua" {...register('rua')} />
          </Column>
        </div>
        <div>
          <Column numGrid={40}>
            <Input type="text" placeholder="Número" {...register('numero')} />
          </Column>
          <Column numGrid={60}>
            <Input type="text" placeholder="Complemento (opcional)" {...register('complemento')} />
          </Column>
        </div>
        <div>
          <Column numGrid={42}>
            <Input type="text" placeholder="Bairro" {...register('bairro')} />
          </Column>
          <Column numGrid={40}>
            <Input type="text" placeholder="Cidade" {...register('cidade')} />
          </Column>
          <Column numGrid={20}>
            <Input type="text" placeholder="UF" {...register('uf')} />
          </Column>
        </div>
      </FormContainer>
    </AddressContainer>
  );
}