import { Meta, StoryObj } from '@storybook/react'

import { MagnifyingGlass } from 'phosphor-react'

import { TextInput, TextInputRootsProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children:[
                <TextInput.Icon>
                    <MagnifyingGlass />
                </TextInput.Icon>,
                <TextInput.Input placeholder='' />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootsProps>

export const Default: StoryObj<TextInputRootsProps> = {}

export const WithoutIcon: StoryObj<TextInputRootsProps> = {
    args: {
        children: <TextInput.Input placeholder='' />
    }           
}