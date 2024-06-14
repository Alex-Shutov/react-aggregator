import React from 'react';

interface IProps{
  description:string
}

const ProjectDescription: React.FC<IProps> = ({description}) => (
  <div className="mt-20">
    <h2 className="text-3xl font-semibold mb-6">Описание проекта</h2>
    <div className="p-12 bg-dark-grey-color text-paragraph-color text-lg space-y-4">
      <p>
        Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков, для решения комбинаторной задачи, которая является главной целью игрока для продвижения в игре на протяжении 14 уровней.
      </p>
      <p>В игре есть 3 основных вида блоков:</p>
      <p>
        — Числовой блок: содержит числовые значения и присвоенную переменную (n,m), на место которой число встанет при слиянии с блоками формул;
      </p>
      <p>
        — Арифметический блок: используется для создания числовых блоков, с помощью добавления арифметических операций с числами: деление/умножение, сложение/вычитание;
      </p>
      <p>
        — Блок формул: содержит основные формулы комбинаторики: P (перестановки), C (сочетания), A (размещения). Данные блоки могут стать результатом слияния арифметических блоков. Блоки формул также можно соединять с числовыми блоками, числа которых встают на место значений (n,m), к которым они принадлежат.
      </p>
      <p>
        После прохождения 14 уровней, вам откроется режим «Испытание», где вы можете проверить свои знания и посоревноваться с другими игроками.
      </p>
    </div>
  </div>
);

export default ProjectDescription;