import {fireEvent, render, screen} from '@testing-library/react';
import MyAccount from './MyAccount';

describe.only('MyAccount', ()=>{
    it('should render MyAccount', () => {
        render(<MyAccount />);
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
      });

      it('should give required error message if firstname blur without input', () => {
        render(<MyAccount />);
        const firstname = screen.getByRole('textbox', { name: /firstname/i });
        fireEvent.blur(firstname);

        expect(screen.getByText('Required')).toBeInTheDocument();
      });



});