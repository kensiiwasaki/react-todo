import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../components/Filter';

it(`renders three tabs`, () => {
    const handleChange = () => {};
    const value = 'ALL';

    const { getAllByRole } = render(
        <Filter onChange={handleChange} value={value} />
    );

    const tabs = getAllByRole('link');
    expect(tabs).toHaveLength(3);
});

it(`renders one active tab`, () => {
    const handleChange = () => {};
    const value = 'DONE';

    const { getByText } = render(
        <Filter onChange={handleChange} value={value} />
    );

    const doneTab = getByText('完了済');
    expect(doneTab).toHaveClass('is-active');

    const allTab = getByText('全て');
    expect(allTab).not.toHaveClass('is-active');

    const todoTab = getByText('スケジュール');
    expect(todoTab).not.HaveClass('is-active');
});

it(`sends clicked tab value`, () => {
    const handleChange = val => {
        expect(val).toBe('スケジュール');
    };
    const value = '全て';

    const { getByText } = render(
        <Fillter onChange={handleChange} value={value} />
    );

    fireEvent.click(getByText('スケジュール'));
});