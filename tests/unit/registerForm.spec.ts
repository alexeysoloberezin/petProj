import { mount } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm.vue';

describe('RegisterForm', () => {
    it('should handle registration form submission', async () => {
        const wrapper = mount(RegisterForm);

        // Можно получить доступ к форме и ее полям для ввода
        const form = wrapper.findComponent({ name: 'AForm' });
        const emailInput = wrapper.findComponent({ name: 'AInput' });
        const passwordInput = wrapper.findComponent({ name: 'AInputPassword' });
        const confirmPasswordInput = wrapper.findAllComponents({ name: 'AInputPassword' })[1];
        const submitButton = wrapper.findComponent({ name: 'AButton' });

        // Можно установить значения в поля ввода
        await emailInput.setValue('test@example.com');
        await passwordInput.setValue('password123');
        await confirmPasswordInput.setValue('password123');

        // Можно отправить форму
        await form.trigger('submit');

        // Можно проверить, что обработчик handleRegister вызвался
        expect(wrapper.vm.handleRegister).toHaveBeenCalled();
    });
});
