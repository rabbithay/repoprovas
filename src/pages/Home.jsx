/* eslint-disable max-len */
import React from 'react';
import {
  Paragraph, Box, Button, Grommet, Menu,
} from 'grommet';
import { Next } from 'grommet-icons';
import { theme } from '../styles/theme';
import { AppBar } from '../components/AppBar';

export default function Homepage() {
  return (
    <Grommet theme={theme} full>
      <AppBar />
      <Box gap="large" direction="row" align="center" justify="center" margin="large">
        <Box pad="large">
          <Paragraph
            margin="small"
            textAlign=""
            size="medium"
          >
            Olá!!!
            <br />
            <br />
            Sabemos que os professores adoram repetir provas anteriores, ou pelo menos seguir modelos parecidos de questões...
            <br />
            <br />
            Por isso, uma das melhores maneiras de se preparar para uma prova, é estudando a partir de provas anteriores daquela matéria e professor.
            <br />
            <br />
            Assim nasce o RepoProvas, com a missão de ser uma plataforma para facilitar o compartilhamento de provas anteriores de maneira anônima e ajudar outros alunos ;)
            <br />
            <br />
            Fique à vontade para consultar nosso banco de provas e adicionar novas ao catálogo!
          </Paragraph>
        </Box>
        <Box gap="xlarge">
          <Menu
            size="large"
            dropProps={{
              align: { top: 'bottom', left: 'left' },
              elevation: 'xlarge',
            }}
            label="Consultar banco de provas"
            items={[
              { label: 'Por professor', onClick: () => {} },
              { label: 'Por disciplina', onClick: () => {} },
            ]}
          />
          <Button
            size="large"
            label="Adicionar prova ao catálogo"
            icon={<Next />}
            reverse
          />
        </Box>
      </Box>
    </Grommet>

  );
}
