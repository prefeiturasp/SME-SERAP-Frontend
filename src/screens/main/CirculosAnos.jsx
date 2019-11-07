import React from 'react';
import CircleAndLabelFill, {
  CIRCLE_COLOR
} from '../../components/circle/CircleAndLabelFill';
import Grid from '../../components/Grid';
import Button, { ButtonStyle } from '../../components/Button';
import NotaTecnicaCalculoMetasIDEP from '../../assets/files/Nota_Tecnica_Calculo_Metas_IDEP.pdf';
import { Link } from 'react-router-dom';

export default function CirculosAnos(props) {
  const { params } = props;
  return (
    <Grid cols="12 12 12 12" className="flex-wrap mt-5 mb-5 text-center">
      <div className="card-deck">
        <Grid cols="3 3 3 3" className="mt-5 mb-2">
          <CircleAndLabelFill
            label={params.first.label}
            color={CIRCLE_COLOR.ROSA}
            topLabel=""
            bottomLabel={params.first.bottomLabel}
            ano="Prova São Paulo 2017/2018"
          />
        </Grid>
        <Grid cols="3 3 3 3" className="mt-5 mb-2">
          <CircleAndLabelFill
            label={params.second.label}
            color={CIRCLE_COLOR.AMARELO}
            topLabel=""
            bottomLabel={params.second.bottomLabel}
            ano="Prova São Paulo 2017/2018"
          />
        </Grid>
        <Grid cols="3 3 3 3" className="mt-5 mb-2">
          <CircleAndLabelFill
            label={params.third.label}
            color={CIRCLE_COLOR.AZUL}
            topLabel=""
            bottomLabel={params.third.bottomLabel}
          />
        </Grid>
        <Grid cols="3 3 3 3" className="mt-5 mb-2">
          <CircleAndLabelFill
            label={params.forth.label}
            color={CIRCLE_COLOR.ROXO}
            topLabel=""
            bottomLabel={params.forth.bottomLabel}
          />
        </Grid>
      </div>
      <Grid cols="12 12 12 12" className="text-right">
        <Link to={NotaTecnicaCalculoMetasIDEP} target="_blank" download>
          <Button
            style={ButtonStyle.OutlinePrimary}
            label="Nota técnica"
            className="font-weight-bold text-uppercase mt-4 pl-3 pr-3 cor-azul"
          />
        </Link>
      </Grid>
    </Grid>
  );
}
