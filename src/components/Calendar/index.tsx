import React, { useState } from "react";

import { 
    Calendar as CustomCalendar,
    LocaleConfig,
    DateData,
} from "react-native-calendars";

LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: "Hoje"
  };
LocaleConfig.defaultLocale = 'br';

import { useTheme } from "styled-components/native";

export interface MarkingProps {
    selected?: boolean;
    selectedColor?: string;
}

type MarkedDatesType = {
    [key: string]: MarkingProps;
};

export function Calendar(){
    const [selectedDay, setSelectedDay] = useState({} as MarkedDatesType);

    const theme = useTheme();

    function handleSelectedDay(date: DateData){
        setSelectedDay({
            [`${date.dateString}`]: { selected: true, selectedColor: theme.COLORS.TEAL_900 }
        })
    }

    return (
        <CustomCalendar 
            onDayPress={date => {
                handleSelectedDay(date)
            }}
            markedDates={selectedDay}
        />
    );
}